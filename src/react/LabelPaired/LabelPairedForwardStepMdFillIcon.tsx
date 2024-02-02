import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.656 17.781q-.5.375-1.093.125Q.03 17.625 0 17V7q.03-.625.563-.906.593-.25 1.093.125l6 5L8 11.53V7q0-.437.281-.719A.97.97 0 0 1 9 6q.438 0 .719.281A.97.97 0 0 1 10 7v10a.97.97 0 0 1-.281.719A.97.97 0 0 1 9 18a.97.97 0 0 1-.719-.281A.97.97 0 0 1 8 17v-4.531l-.344.312z' />
    </g>
    <defs>
      <clipPath id='b2286b5b8f1071e7__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepMdFillIcon);
export default ForwardRef;
