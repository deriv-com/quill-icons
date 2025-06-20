import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 13.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5c0-3.281 2.672-6 6-6h1.5c3.281 0 6 2.719 6 6v.188c0 2.062-1.078 3.937-2.766 5.062l-1.968 1.266c-.328.187-.516.562-.516.937V21c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 21v-.047a4.11 4.11 0 0 1 1.875-3.469l1.969-1.265c.844-.563 1.406-1.5 1.406-2.532V13.5c0-1.64-1.36-3-3-3h-1.5c-1.687 0-3 1.36-3 3m3.75 15c-.703 0-1.312-.328-1.64-.937-.329-.563-.329-1.266 0-1.875a1.89 1.89 0 0 1 1.64-.938c.656 0 1.266.375 1.594.938.328.609.328 1.312 0 1.875-.328.609-.938.937-1.594.937' />
    </g>
    <defs>
      <clipPath id='133847753bc8b2f0f1a0d66f3ce409f7__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionXlFillIcon);
export default ForwardRef;
