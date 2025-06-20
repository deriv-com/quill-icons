import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 27V13.5H12a1.48 1.48 0 0 1-1.5-1.5V8.25H3c-.422 0-.75.375-.75.75v18c0 .422.328.75.75.75h12c.375 0 .75-.328.75-.75M0 9c0-1.64 1.313-3 3-3h7.734c.797 0 1.547.328 2.11.89l4.265 4.266c.563.563.891 1.313.891 2.11V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm9 7.125a.94.94 0 0 1 .938.938v.468c.328.047.656.14.937.188.516.14.844.656.703 1.125a.9.9 0 0 1-1.125.703c-.515-.094-1.031-.188-1.5-.188a1.85 1.85 0 0 0-1.031.188c-.234.14-.234.234-.234.281s.046.094.187.188c.281.14.75.28 1.36.422.515.14 1.218.328 1.734.656.562.328 1.172.89 1.172 1.828.046.984-.516 1.64-1.172 1.969a3 3 0 0 1-1.078.375v.468a.94.94 0 0 1-.938.938.94.94 0 0 1-.937-.938v-.515c-.47-.094-.891-.235-1.266-.328-.094-.047-.187-.047-.281-.094a.937.937 0 0 1-.657-1.172c.141-.516.704-.797 1.172-.61.141 0 .235.047.329.094.656.188 1.171.328 1.687.328a1.94 1.94 0 0 0 1.078-.187c.188-.094.235-.187.235-.328 0 0 0-.094-.235-.235a8 8 0 0 0-1.36-.421l-.046-.047c-.516-.14-1.172-.328-1.688-.563-.562-.328-1.171-.89-1.171-1.828-.047-.984.609-1.594 1.218-1.922.328-.187.657-.281 1.032-.375v-.468A.94.94 0 0 1 9 16.125M4.5 10.5h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H4.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75m0 3h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H4.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='d51a2fcfd6fc2879b2d6b5264b611863__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarXlBoldIcon);
export default ForwardRef;
