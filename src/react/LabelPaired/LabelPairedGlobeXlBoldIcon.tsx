import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeXlBoldIcon = (
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
      <path d='M12 27.75q.281.046.89-.422.61-.421 1.36-1.828.61-1.266 1.031-3H8.72q.422 1.734 1.031 3 .75 1.407 1.36 1.828.61.469.89.422m-3.61-7.5h7.266A26 26 0 0 0 15.75 18q0-1.171-.094-2.25H8.391Q8.25 16.829 8.25 18t.14 2.25m.329-6.75h6.562q-.422-1.734-1.031-3-.75-1.406-1.36-1.828-.61-.469-.89-.422-.28-.046-.89.422-.61.421-1.36 1.828-.61 1.266-1.031 3m9.187 2.25Q18 16.829 18 18t-.094 2.25h3.563A9 9 0 0 0 21.75 18q0-1.171-.281-2.25zm2.766-2.25q-1.595-2.953-4.64-4.36.984 1.829 1.546 4.36zm-14.25 0q.516-2.53 1.547-4.36-3.047 1.407-4.64 4.36zm-3.89 2.25A9 9 0 0 0 2.25 18q0 1.171.281 2.25h3.563A26 26 0 0 1 6 18q0-1.171.094-2.25zm13.5 11.11q3.045-1.407 4.64-4.36h-3.094q-.516 2.531-1.547 4.36m-8.063 0q-.985-1.829-1.547-4.36H3.328q1.595 2.953 4.64 4.36M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30' />
    </g>
    <defs>
      <clipPath id='51cfe51ef8841be66e2c7d3a5fdfa68f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeXlBoldIcon);
export default ForwardRef;
