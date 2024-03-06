import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownCaptionRegularIcon = (
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
      <path d='M.75 4.625v8.25q.024.469.328.797.328.304.797.328h9.75q.352.023.375.375-.023.352-.375.375h-9.75q-.797-.023-1.336-.54-.515-.538-.539-1.335v-8.25q.023-.352.375-.375.352.023.375.375M8.625 5.75q-.352-.023-.375-.375.023-.352.375-.375h2.25q.352.023.375.375v2.25q-.023.352-.375.375-.352-.023-.375-.375V6.289L7.008 9.758q-.258.234-.516 0L4.875 8.164l-1.992 1.969q-.258.234-.516 0-.234-.258 0-.516l2.25-2.25a.31.31 0 0 1 .258-.117q.164 0 .258.117L6.75 8.961 9.96 5.75zm0 6.75q-.352-.023-.375-.375.023-.352.375-.375h1.336l-1.594-1.617.516-.516 1.617 1.594V9.875q.023-.352.375-.375.352.023.375.375v2.25q-.023.352-.375.375z' />
    </g>
    <defs>
      <clipPath id='02403b25ca0dd5b5b633a882779a1579__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownCaptionRegularIcon);
export default ForwardRef;
