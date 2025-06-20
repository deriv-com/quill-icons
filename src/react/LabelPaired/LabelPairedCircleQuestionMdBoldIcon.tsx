import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.5 12c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m5.281-2.812A1.745 1.745 0 0 1 6.938 8H8.75c1.094 0 2 .906 2 2 0 .688-.406 1.344-1 1.688l-1 .593c-.031.406-.344.719-.75.719a.72.72 0 0 1-.75-.75v-.406c0-.281.125-.531.375-.656L9 10.406A.49.49 0 0 0 9.25 10c0-.281-.219-.469-.5-.469H6.938a.235.235 0 0 0-.22.156l-.03.032a.734.734 0 0 1-.938.469.78.78 0 0 1-.469-.97zM7 15c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='35a5eeb9e08021f5657ccc8b11e587f1__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionMdBoldIcon);
export default ForwardRef;
