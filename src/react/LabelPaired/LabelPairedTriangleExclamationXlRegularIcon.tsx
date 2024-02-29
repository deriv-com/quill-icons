import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationXlRegularIcon = (
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
      <path d='M1.64 25.688a.9.9 0 0 0-.14.468q.094.798.844.844h19.312q.75-.046.844-.844 0-.234-.094-.468L12.984 9.563Q12.61 9 12 9q-.61 0-.937.563zm-1.312-.75L9.75 8.813Q10.547 7.547 12 7.5q1.453.047 2.25 1.313l9.422 16.124q.328.563.328 1.22-.047.983-.703 1.64-.657.656-1.64.703H2.343q-.984-.047-1.64-.703-.657-.657-.704-1.64 0-.656.328-1.22M12 13.5q.703.047.75.75v6q-.047.704-.75.75-.703-.046-.75-.75v-6q.047-.703.75-.75M10.875 24q.095-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='b8a1cfcbdf5104820807d2b8ade9da21__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationXlRegularIcon);
export default ForwardRef;
