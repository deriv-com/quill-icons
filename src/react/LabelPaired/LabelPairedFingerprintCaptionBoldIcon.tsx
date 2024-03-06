import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintCaptionBoldIcon = (
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
      <path d='M1.125 9.5v.938q-.047.514-.562.562-.516-.047-.563-.562V9.5q.024-1.688.82-3.023A5.94 5.94 0 0 1 2.977 4.32Q4.312 3.524 6 3.5q1.382 0 2.555.563a6 6 0 0 1 1.992 1.523q.304.422-.047.797-.422.304-.797-.047a4.8 4.8 0 0 0-1.64-1.242A4.55 4.55 0 0 0 6 4.625q-2.062.047-3.445 1.43T1.125 9.5m10.758-1.242Q12 8.867 12 9.5v.938q-.047.514-.562.562-.516-.047-.563-.562V9.5q0-.516-.094-1.008-.07-.515.422-.656.515-.07.68.422M6 5.375q1.757.047 2.93 1.219 1.148 1.148 1.195 2.906v.586q0 .984-.117 1.945-.094.445-.54.469-.28 0-.421-.187a.6.6 0 0 1-.14-.47Q9 10.978 9 10.087V9.5q-.024-1.266-.867-2.133Q7.265 6.524 6 6.5q-.399 0-.773.094-.423.117-.704-.164a.53.53 0 0 1-.117-.492q.047-.258.328-.352.586-.21 1.266-.211M3.54 6.992q.255.375 0 .797Q3.022 8.54 3 9.5v.586q0 1.008-.234 2.016-.118.375-.516.398a.52.52 0 0 1-.445-.234.6.6 0 0 1-.117-.493 7.8 7.8 0 0 0 .187-1.687V9.5q.024-1.453.867-2.531a.51.51 0 0 1 .399-.188q.21.024.398.211M8.25 9.5v.586q0 1.406-.281 2.766-.095.375-.492.398a.51.51 0 0 1-.399-.187q-.14-.189-.094-.446.235-1.265.235-2.531V9.5a1.32 1.32 0 0 0-.352-.867A1.32 1.32 0 0 0 6 8.28a1.32 1.32 0 0 0-.867.352 1.32 1.32 0 0 0-.352.867v.586q0 1.43-.375 2.812a.495.495 0 0 1-.468.352.47.47 0 0 1-.422-.21.62.62 0 0 1-.094-.47q.328-1.218.328-2.484V9.5q.024-.96.656-1.594Q5.04 7.274 6 7.25q.96.024 1.594.656.633.633.656 1.594M6 8.938q.516.045.563.562v.586q0 2.32-.844 4.5l-.14.375q-.212.445-.727.305-.446-.211-.305-.727l.14-.351q.75-1.97.75-4.102V9.5q.048-.516.563-.562' />
    </g>
    <defs>
      <clipPath id='03a65392223e1b28e3f10f6220c1dc73__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintCaptionBoldIcon);
export default ForwardRef;
