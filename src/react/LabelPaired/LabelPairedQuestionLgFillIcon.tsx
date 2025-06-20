import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.375 11.75c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-2.734 2.227-5 5-5h1.25c2.734 0 5 2.266 5 5v.156c0 1.719-.898 3.281-2.305 4.219L8.18 17.18c-.274.156-.43.468-.43.78V18c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-.04c0-1.17.586-2.265 1.563-2.89l1.64-1.054c.703-.47 1.172-1.25 1.172-2.11v-.156c0-1.367-1.133-2.5-2.5-2.5h-1.25a2.49 2.49 0 0 0-2.5 2.5M6.5 24.25c-.586 0-1.094-.273-1.367-.781-.274-.469-.274-1.055 0-1.563a1.58 1.58 0 0 1 1.367-.781 1.56 1.56 0 0 1 1.328.781c.274.508.274 1.094 0 1.563a1.48 1.48 0 0 1-1.328.781' />
    </g>
    <defs>
      <clipPath id='37f7908e8b9192924946e2cf541ab6e5__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionLgFillIcon);
export default ForwardRef;
