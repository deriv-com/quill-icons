import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraXlRegularIcon = (
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
      <path d='M8.953 7.5h6.094q1.547.094 2.156 1.547l.469 1.453H21q1.266.047 2.11.89.843.844.89 2.11v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-12q.047-1.266.89-2.11.844-.843 2.11-.89h3.328l.516-1.453q.562-1.454 2.11-1.547M8.25 9.516l-.656 1.968q-.188.47-.703.516H3q-.656 0-1.078.422-.422.421-.422 1.078v12q0 .657.422 1.078Q2.343 27 3 27h18q.657 0 1.078-.422.422-.421.422-1.078v-12q0-.656-.422-1.078Q21.657 12 21 12h-3.89q-.516-.046-.704-.516l-.656-1.968q-.188-.47-.703-.516H8.953q-.516.046-.703.516M12 24.75a5.17 5.17 0 0 1-2.625-.703 5.16 5.16 0 0 1-1.922-1.922A5.17 5.17 0 0 1 6.75 19.5q0-1.406.703-2.625a5.16 5.16 0 0 1 1.922-1.922A5.17 5.17 0 0 1 12 14.25q1.407 0 2.625.703a5.16 5.16 0 0 1 1.922 1.922q.703 1.22.703 2.625 0 1.407-.703 2.625a5.16 5.16 0 0 1-1.922 1.922A5.17 5.17 0 0 1 12 24.75M8.25 19.5q.047 2.109 1.875 3.234 1.875 1.032 3.75 0 1.828-1.125 1.875-3.234-.047-2.109-1.875-3.234-1.875-1.032-3.75 0Q8.297 17.39 8.25 19.5' />
    </g>
    <defs>
      <clipPath id='81bb08e92f03297b0743ab01bdffb26c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraXlRegularIcon);
export default ForwardRef;
