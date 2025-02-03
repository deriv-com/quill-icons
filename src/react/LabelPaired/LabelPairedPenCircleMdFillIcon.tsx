import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m3.156-11.625a1.265 1.265 0 0 0-1.75 0l-.687.688 2.219 2.218.687-.687c.469-.5.469-1.281 0-1.75zM4.72 13.031a1 1 0 0 0-.25.469L4 15.375c-.031.188 0 .375.125.5a.52.52 0 0 0 .469.125l1.906-.469a1.3 1.3 0 0 0 .438-.281l3.312-3.281L8.031 9.75z' />
    </g>
    <defs>
      <clipPath id='2709dba55f689112a667ce0ec1fb3ddd__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleMdFillIcon);
export default ForwardRef;
