import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.328 7.5h5.344q.843 0 1.547.516.656.468.937 1.265l.422 1.219H21q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-12q.047-1.266.89-2.11.844-.843 2.11-.89h3.422l.422-1.219 1.078.375-1.078-.375q.281-.797.937-1.265A2.56 2.56 0 0 1 9.328 7.5M9 10.031 8.344 12q-.328.703-1.078.75H3q-.703.047-.75.75v12q.046.704.75.75h18q.704-.046.75-.75v-12q-.046-.703-.75-.75h-4.266q-.75-.047-1.03-.75l-.657-1.969q-.141-.28-.375-.281H9.328q-.234 0-.328.281m3 14.719a5.17 5.17 0 0 1-2.625-.703 5.16 5.16 0 0 1-1.922-1.922A5.17 5.17 0 0 1 6.75 19.5q0-1.406.703-2.625a5.16 5.16 0 0 1 1.922-1.922A5.17 5.17 0 0 1 12 14.25q1.407 0 2.625.703a5.16 5.16 0 0 1 1.922 1.922q.703 1.22.703 2.625 0 1.407-.703 2.625a5.16 5.16 0 0 1-1.922 1.922A5.17 5.17 0 0 1 12 24.75M9 19.5q.047 1.687 1.5 2.578 1.5.845 3 0 1.453-.89 1.5-2.578-.047-1.687-1.5-2.578-1.5-.844-3 0-1.453.89-1.5 2.578' />
    </g>
    <defs>
      <clipPath id='de3a88b61942ff67__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraXlBoldIcon);
export default ForwardRef;
