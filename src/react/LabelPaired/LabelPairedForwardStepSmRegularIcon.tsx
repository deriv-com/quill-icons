import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.125 5.938a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v9.625a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V11.87L2.23 15.836a.76.76 0 0 1-.492.164.735.735 0 0 1-.738-.738V6.266c0-.41.328-.766.738-.766.192 0 .356.082.492.191l4.895 3.965zm-5.25.574v8.504L7.07 10.75z' />
    </g>
    <defs>
      <clipPath id='8a7f9714ff16c17069636bb88902839a__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmRegularIcon);
export default ForwardRef;
