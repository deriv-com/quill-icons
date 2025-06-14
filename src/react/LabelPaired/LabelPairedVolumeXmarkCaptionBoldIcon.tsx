import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.977 8.234a.52.52 0 0 1-.352.141H1.563a.185.185 0 0 0-.188.188v1.874c0 .118.07.188.188.188h2.062c.117 0 .258.07.352.164l2.648 2.32V5.914zm3.07-3.984a.72.72 0 0 1 .703.703v9.117c0 .375-.328.68-.703.68-.188 0-.352-.047-.469-.164L3.391 11.75H1.563A1.31 1.31 0 0 1 .25 10.438V8.562c0-.703.586-1.312 1.313-1.312H3.39l3.187-2.812a.65.65 0 0 1 .469-.188m3.164 3.164 1.289 1.29 1.29-1.29c.21-.21.562-.21.773 0 .234.234.234.586 0 .797L12.273 9.5l1.29 1.29c.234.233.234.585 0 .796a.513.513 0 0 1-.774 0l-1.289-1.29-1.29 1.29c-.233.234-.585.234-.796 0-.234-.211-.234-.563 0-.797l1.29-1.289-1.29-1.29c-.234-.21-.234-.562 0-.796.211-.21.563-.21.797 0' />
    </g>
    <defs>
      <clipPath id='da106addfe1771125589fd8d2d8ba980__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkCaptionBoldIcon);
export default ForwardRef;
