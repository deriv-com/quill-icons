import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.25 6.375q-.027-.738-.52-1.23-.492-.493-1.23-.52-.738.027-1.23.52-.493.492-.52 1.23v4.375q.027.738.52 1.23.492.493 1.23.52.738-.027 1.23-.52.493-.492.52-1.23zm-4.375 0q.027-1.12.766-1.86.738-.738 1.859-.765 1.12.027 1.86.766.738.738.765 1.859v4.375q-.027 1.12-.766 1.86-.738.738-1.859.765-1.12-.027-1.86-.766-.738-.738-.765-1.859zM2 9.438v1.312q.027 1.476 1.012 2.488 1.012.985 2.488 1.012 1.476-.027 2.488-1.012Q8.973 12.226 9 10.75V9.438q.027-.411.438-.438.41.027.437.438v1.312q-.027 1.75-1.148 2.953-1.095 1.203-2.79 1.395v1.777h1.75q.411.027.438.438-.027.41-.437.437H3.313q-.411-.027-.438-.437.027-.411.438-.438h1.75v-1.777q-1.695-.192-2.79-1.395-1.12-1.203-1.148-2.953V9.438q.027-.411.438-.438.41.027.437.438' />
    </g>
    <defs>
      <clipPath id='3fee9a058678e235651ddf4d7b76e641__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneSmRegularIcon);
export default ForwardRef;
