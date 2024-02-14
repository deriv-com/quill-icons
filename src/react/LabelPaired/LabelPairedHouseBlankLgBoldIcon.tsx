import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.125 5.734 10.313 8.75q.585.587.078 1.329-.586.585-1.29.078l-.976-.782v7.266q-.04 1.328-.898 2.227-.9.858-2.227.898H5.875q-1.328-.04-2.227-.898-.859-.9-.898-2.227v-7.266l-.977.782q-.702.507-1.289-.079-.507-.741.079-1.328l10.312-8.75q.625-.468 1.25 0m6.25 7.774L11.5 7.688l-6.875 5.82v8.867q0 .547.352.898.35.352.898.352h11.25q.547 0 .898-.352.352-.35.352-.898z' />
    </g>
    <defs>
      <clipPath id='3a5814f1e5e474c387ccf1ec6334e9fa__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankLgBoldIcon);
export default ForwardRef;
