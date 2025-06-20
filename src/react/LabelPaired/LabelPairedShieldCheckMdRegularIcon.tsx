import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckMdRegularIcon = (
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
      <path d='M7.594 5.188 2.063 7.53c-.344.125-.594.469-.563.844 0 2.938 1.219 8.125 6.094 10.469a.86.86 0 0 0 .781 0C13.25 16.5 14.469 11.312 14.5 8.375c0-.375-.25-.687-.594-.844L8.375 5.188a.86.86 0 0 0-.781 0M8.78 4.25l5.5 2.344c.688.312 1.219.968 1.219 1.781-.031 3.125-1.312 8.781-6.687 11.375-.532.25-1.126.25-1.657 0C1.781 17.156.5 11.5.5 8.375c-.031-.812.5-1.469 1.188-1.781l5.53-2.344a1.94 1.94 0 0 1 1.563 0M8 9.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75m1.75.75c0 .813-.531 1.469-1.25 1.688V14.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-2.312c-.75-.22-1.25-.876-1.25-1.688 0-.937.781-1.75 1.75-1.75.938 0 1.75.813 1.75 1.75' />
    </g>
    <defs>
      <clipPath id='d283e37665f22c0aeaccff5ff326c654__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckMdRegularIcon);
export default ForwardRef;
