import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepXlRegularIcon = (
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
      <path d='M12 9.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v16.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6.328l-8.39 6.797a1.3 1.3 0 0 1-.844.281A1.26 1.26 0 0 1 1.5 25.734V10.312C1.5 9.61 2.063 9 2.766 9c.328 0 .609.14.843.328L12 16.125zm-9 .984v14.579L11.906 18z' />
    </g>
    <defs>
      <clipPath id='c57bcd6c9f9fcf9d8b9b8c09d944f32c__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlRegularIcon);
export default ForwardRef;
