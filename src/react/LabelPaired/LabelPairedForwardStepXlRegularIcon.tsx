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
      <path d='M12 9.75q.047-.703.75-.75.703.047.75.75v16.5q-.047.704-.75.75-.703-.046-.75-.75v-6.375l-8.39 6.844a1.18 1.18 0 0 1-.797.281q-.563 0-.938-.375a1.27 1.27 0 0 1-.375-.937V10.313q0-.563.375-.938T2.813 9q.468 0 .796.281L12 16.125zm-9 .984v14.532L11.953 18z' />
    </g>
    <defs>
      <clipPath id='c6d29db3a9f744124ca97100e7ab1357__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepXlRegularIcon);
export default ForwardRef;
