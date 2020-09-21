import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { isSlotEmpty } from '../../helpers/components';
@Component({
  tag: 'linkable-title',
  styleUrl: 'linkable-title.scss',
})
export class LinkableTitle {
  @Element() el: HTMLElement;
  /**
   * HTML tag to be used for the content
   */
  @Prop() tag: string = 'h4';

  /**
   * If there's an icon to be displayed on hover/focus
   */
  @Prop() noIcon: boolean = false;

  /**
   * Position of icon
   */
  @Prop() iconPosition: 'start' | 'end' = 'end';

  @State() highlight: boolean = false;

  @State() defaultIcon: boolean = false;

  componentDidLoad() {
    const { hash } = window.location;
    if (hash === `#${this.el.id}`) {
      this.highlight = true;
      const yOffset = -40;
      const y = this.el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  componentWillLoad() {
    if (isSlotEmpty(this.el, 'icon')) {
      this.defaultIcon = true;
    }
  }

  renderIcon() {
    return (
      <span class="anchor-icon">
        {this.defaultIcon ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M60.454 65.926c-5.064 0-10.181-1.96-14.047-5.826-1.633-1.579-1.633-4.192 0-5.771 1.579-1.579 4.138-1.579 5.771 0 2.287 2.287 5.227 3.43 8.276 3.43 2.995 0 5.935-1.143 8.276-3.43l14.592-14.592c2.287-2.341 3.43-5.281 3.43-8.276 0-3.049-1.143-5.989-3.43-8.276s-5.281-3.43-8.276-3.43-5.989 1.143-8.276 3.43l-7.296 7.296c-1.633 1.579-4.192 1.579-5.771 0-1.633-1.633-1.633-4.192 0-5.771l7.296-7.296c3.866-3.92 8.984-5.826 14.047-5.826s10.181 1.906 14.047 5.826c3.866 3.866 5.826 8.929 5.826 14.047 0 5.064-1.96 10.181-5.826 14.047L74.501 60.1c-3.866 3.866-8.984 5.826-14.047 5.826z" />
            <path d="M53.593 39.9c1.579 1.579 1.579 4.192 0 5.771-1.579 1.633-4.192 1.633-5.771 0-2.287-2.287-5.281-3.43-8.276-3.43s-5.989 1.143-8.276 3.43L16.679 60.263c-2.287 2.341-3.43 5.281-3.43 8.276 0 3.049 1.143 5.989 3.43 8.276s5.227 3.43 8.276 3.43c2.995 0 5.935-1.143 8.276-3.43l7.296-7.296c1.579-1.579 4.138-1.579 5.771 0 1.579 1.633 1.579 4.192 0 5.771l-7.296 7.296c-3.866 3.92-8.984 5.826-14.047 5.826-5.118 0-10.181-1.906-14.047-5.826-3.866-3.866-5.826-8.929-5.826-14.047 0-5.064 1.906-10.181 5.826-14.047L25.499 39.9c3.866-3.866 8.984-5.826 14.047-5.826s10.182 1.96 14.047 5.826z" />
          </svg>
        ) : (
          <slot name="icon"></slot>
        )}
      </span>
    );
  }

  render() {
    const Tag = this.tag;
    const { highlight, noIcon, iconPosition } = this;
    const icon = !noIcon;

    return (
      <Host class={{ highlight, icon, start: iconPosition === 'start' }}>
        <Tag>
          <a href={`#${this.el.id}`}>
            {!this.noIcon && this.renderIcon()}
            <slot></slot>
          </a>
        </Tag>
      </Host>
    );
  }
}
