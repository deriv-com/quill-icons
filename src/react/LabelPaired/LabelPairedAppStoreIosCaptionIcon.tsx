import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.625 4.25c.61 0 1.125.516 1.125 1.125v8.25c0 .633-.516 1.125-1.125 1.125h-8.25A1.11 1.11 0 0 1 .25 13.625v-8.25c0-.61.492-1.125 1.125-1.125zm-6.398 8.273.445-.773c-.235-.305-.563-.398-.938-.281l-.328.586c-.14.21-.047.515.164.633.235.14.516.07.657-.165m3.234-1.265c.21-.375-.047-.938-.516-.938H4.492l1.992-3.492c.141-.21.07-.492-.164-.633-.21-.117-.515-.047-.633.164l-.21.375-.211-.375c-.118-.21-.422-.28-.633-.164a.473.473 0 0 0-.188.633l.492.844-1.523 2.648H2.22a.47.47 0 0 0-.469.47c0 .257.21.468.469.468zm2.32 0a.47.47 0 0 0 .469-.469.47.47 0 0 0-.469-.469H7.562C6.93 9.266 6.485 8.47 6.18 7.93c-.282.234-.563.914-.164 1.593.375.657.96 1.665 1.734 3a.454.454 0 0 0 .633.165.454.454 0 0 0 .164-.633l-.445-.797z' />
    </g>
    <defs>
      <clipPath id='54985617a3a87cb2271977dc784a41b7__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosCaptionIcon);
export default ForwardRef;
