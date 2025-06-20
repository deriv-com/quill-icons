import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraCaptionRegularIcon = (
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
      <path d='M4.477 4.25H7.5c.492 0 .914.328 1.078.773l.235.727H10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-6c0-.82.656-1.5 1.5-1.5h1.664l.234-.727a1.165 1.165 0 0 1 1.079-.773m-.375 1.008-.329 1.008a.36.36 0 0 1-.351.234H1.5a.755.755 0 0 0-.75.75v6c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75v-6a.77.77 0 0 0-.75-.75H8.555a.35.35 0 0 1-.352-.258l-.328-.984C7.805 5.118 7.665 5 7.5 5H4.477c-.165 0-.305.117-.375.258M6 12.875a2.58 2.58 0 0 1-2.273-1.312 2.52 2.52 0 0 1 0-2.626A2.63 2.63 0 0 1 6 7.626c.938 0 1.781.516 2.25 1.313.492.82.492 1.828 0 2.624A2.57 2.57 0 0 1 6 12.876M4.125 10.25c0 .68.352 1.29.938 1.64.562.329 1.289.329 1.875 0 .562-.35.937-.96.937-1.64 0-.656-.375-1.266-.937-1.617a1.91 1.91 0 0 0-1.875 0c-.586.351-.938.96-.938 1.617' />
    </g>
    <defs>
      <clipPath id='613bd9fe956d8b8faa854a7475585774__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraCaptionRegularIcon);
export default ForwardRef;
