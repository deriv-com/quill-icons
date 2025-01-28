import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.168 13.102c.3.273.492.656.492 1.12 0 .466-.191.848-.492 1.122-.3.246-.711.383-1.121.437-.055 0-.11 0-.137-.027v.273c0 .383-.219.711-.52.93-.3.219-.683.355-1.066.355H8.176c-.547 0-.82-.656-.465-1.039a1.9 1.9 0 0 0-.219-.52c-.11-.108-.273-.19-.52-.19a.68.68 0 0 0-.492.19c-.082.138-.164.302-.218.52.355.383.082 1.04-.465 1.04H4.648c-.41 0-.793-.137-1.066-.356A1.15 1.15 0 0 1 3.09 16v-3.5c0-.164 0-.273-.027-.383 0-.137 0-.219.027-.465v-.875c0-.082 0-.191-.027-.3-.028 0-.083.027-.137 0-.41-.028-.793-.137-1.094-.383-.328-.274-.492-.656-.492-1.121s.191-.848.52-1.094c.3-.219.683-.3 1.066-.328h.136c.028-.11.028-.219.028-.301 0-.383.219-.71.492-.93.3-.218.684-.355 1.094-.355h.765v-.137c.028-.41.164-.82.438-1.121.273-.3.656-.492 1.121-.492s.848.191 1.121.492c.274.3.41.711.438 1.121 0 .055 0 .082-.028.137h.793c.41 0 .793.137 1.094.355.273.22.492.547.492.93v5.414h.137c.41.027.82.164 1.121.438m-7.574 3.363h.847V16.3c.028-.383.164-.793.41-1.094.274-.3.657-.492 1.122-.492s.847.191 1.12.492c.274.3.41.711.438 1.121.028.055 0 .082 0 .137h.821c.218 0 .41-.082.546-.164.11-.11.165-.192.165-.274v-.629c0-.546.656-.793 1.039-.464a.83.83 0 0 0 .492-.22.6.6 0 0 0 .219-.491c0-.246-.083-.383-.22-.493a.83.83 0 0 0-.491-.218c-.383.328-1.04.054-1.04-.492v-.957H8.177c-.547 0-.82-.657-.465-1.04a1.4 1.4 0 0 0-.219-.492.66.66 0 0 0-.52-.219.6.6 0 0 0-.492.22c-.109.109-.164.273-.218.491.355.383.082 1.04-.465 1.04H3.91V16c0 .11.027.191.164.3.137.11.301.165.52.165m-.684-5.25h1.531v-.137c.028-.41.164-.82.41-1.121.274-.3.657-.492 1.122-.492s.847.191 1.12.492c.274.3.41.711.438 1.121.028.055 0 .082 0 .137h1.559V7.25c0-.082-.055-.164-.192-.273q-.204-.165-.574-.165H8.176c-.547 0-.793-.656-.465-1.039a1 1 0 0 0-.219-.52.68.68 0 0 0-.492-.19.68.68 0 0 0-.492.19c-.11.138-.192.302-.219.52.328.383.055 1.04-.492 1.04H4.676c-.246 0-.465.054-.602.164-.11.109-.164.191-.164.273v.027c0 .055 0 .246-.027.438 0 .082-.028.191-.055.3-.027.083-.082.247-.219.356a.77.77 0 0 1-.41.11c-.082-.028-.164-.055-.219-.083-.027 0-.027-.027-.027-.027-.3.027-.492.11-.601.191-.11.083-.192.192-.192.41 0 .22.082.356.192.466.136.109.328.19.601.218 0-.027 0-.027.027-.027.055-.027.137-.055.22-.082.136 0 .273.027.41.11.136.109.19.273.218.355.027.11.055.218.055.3.027.192.027.356.027.438z' />
    </g>
    <defs>
      <clipPath id='db257d7a5b2da3112610b4fb6697b058__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoSmBoldIcon);
export default ForwardRef;
