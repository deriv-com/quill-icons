import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.063 5.188c.28.218.437.5.437.812v3h.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.5V7.406l-.187.063a1.054 1.054 0 0 1-1.282-.625 1.054 1.054 0 0 1 .625-1.282l1.5-.5c.313-.093.656-.062.906.125M5 19c-.281 0-.562-.094-.75-.312l-2.75-3a.99.99 0 0 1 .063-1.407.99.99 0 0 1 1.406.063L4 15.438V6c0-.531.438-1 1-1 .531 0 1 .469 1 1v9.438l1-1.094a.99.99 0 0 1 1.406-.063c.406.375.438 1 .063 1.406l-2.75 3A.9.9 0 0 1 5 19m8.063-5.406c-.5.25-.72.844-.47 1.344.22.5.813.718 1.313.468a.96.96 0 0 0 .469-1.312.997.997 0 0 0-1.312-.5m-.407 3.531a2.69 2.69 0 0 1-1.906-2.594 2.734 2.734 0 0 1 2.75-2.75c1.5 0 2.75 1.219 2.75 2.75 0 .719-.25 1.438-.687 2.031l-1.532 2.063a.96.96 0 0 1-1.375.188c-.469-.313-.562-.938-.219-1.407z' />
    </g>
    <defs>
      <clipPath id='4a84e4c95ada5d520e55352f2bb63f31__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineMdFillIcon);
export default ForwardRef;
