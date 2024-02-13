import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.25 5.938H1.75q-.41.027-.437.437v8.75l.136-.164 2.188-3.063a.6.6 0 0 1 .52-.273q.327 0 .546.273l.82 1.176 2.27-2.953a.62.62 0 0 1 .52-.246q.327 0 .519.246l3.719 4.813.136.191v-8.75q-.027-.41-.437-.437M1.75 4.625h10.5q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52-.493-.492-.52-1.23v-8.75q.027-.738.52-1.23.492-.493 1.23-.52m2.188 5.25q-.74-.027-1.149-.656a1.4 1.4 0 0 1 0-1.313q.41-.629 1.148-.656.74.027 1.149.656.329.656 0 1.313-.41.629-1.149.656' />
    </g>
    <defs>
      <clipPath id='3c5cf27de3f56db472ed4b7a25b531e5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageSmBoldIcon);
export default ForwardRef;
