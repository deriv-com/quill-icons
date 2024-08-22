import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineXlRegularIcon = (
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
      <path d='M1.5 15c0 3.328 2.672 6 6 6 3.234 0 5.906-2.578 6-5.812V15c0-3.281-2.719-6-6-6-3.328 0-6 2.719-6 6m7.547 7.36a8.6 8.6 0 0 1-1.547.14A7.46 7.46 0 0 1 0 15c0-4.125 3.328-7.5 7.5-7.5 4.125 0 7.5 3.375 7.5 7.5 0 .094 0 .188-.047.281-.047 1.781-.703 3.516-1.922 4.828l-7.219 8.157c-.28.328-.75.328-1.078.047a.7.7 0 0 1-.046-1.032z' />
    </g>
    <defs>
      <clipPath id='02577a4ea50f2f176b2b76b6d46efb6b__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineXlRegularIcon);
export default ForwardRef;
