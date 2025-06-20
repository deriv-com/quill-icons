import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarXlBoldIcon = (
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
      <path d='M12 8.25c-3.516 0-6.703 1.875-8.484 4.875-1.735 3.047-1.735 6.75 0 9.75C5.296 25.922 8.484 27.75 12 27.75c3.469 0 6.656-1.828 8.438-4.875 1.734-3 1.734-6.703 0-9.75-1.782-3-4.97-4.875-8.438-4.875M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m0-18.328c.281 0 .516.187.656.422l1.453 3 3.282.469a.76.76 0 0 1 .609.515.73.73 0 0 1-.187.75l-2.391 2.297.562 3.281a.78.78 0 0 1-.28.75c-.235.14-.563.188-.798.047L12 21.656l-2.953 1.547c-.235.14-.563.094-.797-.047a.78.78 0 0 1-.281-.75l.562-3.281-2.39-2.297a.73.73 0 0 1-.188-.75.76.76 0 0 1 .61-.515l3.28-.47 1.454-3c.14-.234.375-.421.703-.421' />
    </g>
    <defs>
      <clipPath id='9230f56418e408ab6b3f9d8264506956__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarXlBoldIcon);
export default ForwardRef;
