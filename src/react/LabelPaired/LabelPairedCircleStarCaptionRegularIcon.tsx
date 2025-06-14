import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 4.25a5.24 5.24 0 0 0-4.547 2.625 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25A5.23 5.23 0 0 0 6 4.25M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m.328-9.352.844 1.735 1.898.281c.14.024.258.117.305.258a.33.33 0 0 1-.094.375l-1.36 1.336.306 1.898c.023.14-.024.281-.141.352a.41.41 0 0 1-.399.047L6 11.54l-1.71.89a.41.41 0 0 1-.4-.047c-.117-.07-.163-.211-.14-.352l.328-1.898-1.383-1.336c-.093-.094-.14-.258-.093-.399.046-.117.164-.234.304-.234l1.899-.281.843-1.735c.07-.117.211-.21.352-.21s.258.093.328.21m-.937 2.227c-.047.117-.164.188-.282.21l-1.336.212.961.937c.094.094.141.211.118.329l-.235 1.335 1.196-.632a.46.46 0 0 1 .351 0l1.195.632-.234-1.335c-.023-.118.023-.235.117-.329l.961-.937-1.336-.211c-.117 0-.234-.094-.281-.188L6 7.18z' />
    </g>
    <defs>
      <clipPath id='6347debe3f09d09bdb6b628179251ace__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarCaptionRegularIcon);
export default ForwardRef;
