import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineCaptionRegularIcon = (
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
      <path d='M.75 4.625v8.25q.024.469.328.797.328.304.797.328h9.75q.352.023.375.375-.023.352-.375.375h-9.75q-.797-.023-1.336-.54-.515-.538-.539-1.335v-8.25q.023-.352.375-.375.352.023.375.375m10.383 2.508-3.375 3.375q-.258.234-.516 0L5.25 8.539l-2.367 2.344q-.258.234-.516 0-.234-.258 0-.516l2.625-2.625q.258-.234.516 0L7.5 9.711l3.117-3.094q.258-.234.516 0 .234.258 0 .516' />
    </g>
    <defs>
      <clipPath id='fbc28fc9d29e971a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineCaptionRegularIcon);
export default ForwardRef;
