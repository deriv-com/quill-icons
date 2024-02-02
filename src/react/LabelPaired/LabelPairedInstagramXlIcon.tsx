import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramXlIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 12.61q2.297.046 3.797 1.593 1.546 1.5 1.594 3.797-.048 2.297-1.594 3.797-1.5 1.546-3.797 1.594-2.297-.048-3.797-1.594Q5.157 20.297 5.11 18q.048-2.297 1.594-3.797 1.5-1.546 3.797-1.594m0 8.906q1.5-.047 2.484-1.032.985-.984 1.032-2.484-.047-1.5-1.032-2.484Q12 14.53 10.5 14.484q-1.5.047-2.484 1.032Q7.03 16.5 6.984 18q.047 1.5 1.032 2.484.984.985 2.484 1.032m6.89-9.141a1.53 1.53 0 0 0-.374-.89 1.3 1.3 0 0 0-.891-.329q-.563 0-.89.328-.376.375-.376.891.095 1.172 1.266 1.266 1.125-.095 1.266-1.266m3.563 1.313v-.047q.047.937.047 2.672v3.375q0 1.688-.047 2.625 0 2.577-1.734 4.406-1.828 1.734-4.36 1.687-.937.048-2.671.094H8.812a111 111 0 0 1-2.624-.094q-2.58.047-4.407-1.687Q.047 24.89.094 22.312 0 21.376 0 19.688v-3.375q0-1.734.094-2.671-.047-2.532 1.687-4.36 1.875-1.734 4.407-1.734A54 54 0 0 1 8.813 7.5h3.374q1.735 0 2.672.047 2.532 0 4.36 1.734 1.734 1.829 1.734 4.406m-2.25 10.5q.329-.938.375-2.532.094-1.593.047-2.906v-1.5q.047-1.313-.047-2.906-.046-1.594-.375-2.531a3.75 3.75 0 0 0-2.015-2.016q-.938-.328-2.532-.375a100 100 0 0 0-2.906-.047h-1.5a31 31 0 0 0-2.906.047q-1.547.046-2.532.375a3.75 3.75 0 0 0-2.015 2.015q-.328.939-.375 2.532a100 100 0 0 0-.047 2.906v1.5q0 1.313.047 2.906.046 1.547.375 2.532a3.75 3.75 0 0 0 2.015 2.015q.985.329 2.532.375 1.593.047 2.906.047h1.5q1.313 0 2.906-.047 1.594-.046 2.531-.375a3.75 3.75 0 0 0 2.016-2.015' />
    </g>
    <defs>
      <clipPath id='c9fc839b367b5ba7__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramXlIcon);
export default ForwardRef;
