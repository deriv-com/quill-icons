import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserXlRegularIcon = (
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
      <path d='M19.313 25.547q1.5-1.454 2.343-3.375Q22.5 20.25 22.5 18q-.047-2.953-1.453-5.297a9.83 9.83 0 0 0-3.75-3.75Q14.953 7.547 12 7.5q-2.953.047-5.297 1.453a9.8 9.8 0 0 0-3.75 3.75Q1.547 15.047 1.5 18q0 2.25.844 4.172a10.6 10.6 0 0 0 2.344 3.375q.515-2.016 2.109-3.281Q8.344 21.046 10.5 21h3q2.157.046 3.703 1.266 1.594 1.265 2.11 3.28M18 26.625q-.188-1.78-1.453-2.906-1.219-1.173-3.047-1.219h-3q-1.828.047-3.047 1.219Q6.187 24.843 6 26.625q2.625 1.829 6 1.875 3.375-.046 6-1.875M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m0-12q1.266-.046 1.969-1.125.562-1.125 0-2.25Q13.266 13.547 12 13.5q-1.266.047-1.969 1.125-.562 1.125 0 2.25Q10.734 17.954 12 18m-3.75-2.25q.047-2.109 1.875-3.234 1.875-1.032 3.75 0 1.828 1.125 1.875 3.234-.047 2.109-1.875 3.234-1.875 1.032-3.75 0Q8.297 17.86 8.25 15.75' />
    </g>
    <defs>
      <clipPath id='953daf030f804a83256bf347c85acd54__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserXlRegularIcon);
export default ForwardRef;
