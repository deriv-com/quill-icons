import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={5}
    height={30}
    viewBox='0 0 5 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 19.563c.781 0 1.484.43 1.875 1.093.39.703.39 1.524 0 2.188A2.1 2.1 0 0 1 2.5 23.937c-.82 0-1.523-.39-1.914-1.093-.39-.664-.39-1.485 0-2.188A2.2 2.2 0 0 1 2.5 19.563m0-6.25c.781 0 1.484.43 1.875 1.093.39.703.39 1.524 0 2.188A2.1 2.1 0 0 1 2.5 17.687c-.82 0-1.523-.39-1.914-1.093-.39-.664-.39-1.485 0-2.188A2.2 2.2 0 0 1 2.5 13.312M4.688 9.25a2.2 2.2 0 0 1-1.094 1.914c-.703.39-1.524.39-2.188 0C.703 10.774.313 10.07.313 9.25c0-.781.39-1.484 1.093-1.875.664-.39 1.485-.39 2.188 0A2.18 2.18 0 0 1 4.688 9.25' />
    </g>
    <defs>
      <clipPath id='4d200bb14cd5ff602644d215a3d1dabf__a'>
        <path d='M0 0h5v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalLgFillIcon);
export default ForwardRef;
