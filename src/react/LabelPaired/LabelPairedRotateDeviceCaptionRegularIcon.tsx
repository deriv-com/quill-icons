import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceCaptionRegularIcon = (
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
      <path d='m3.188 7.695.796-.797-.164-.164-.797.797zm6.609 2.344a.98.98 0 0 1 0 1.336l-2.133 2.11a.906.906 0 0 1-1.312 0L2.109 9.241a.906.906 0 0 1 0-1.312l2.11-2.133a.98.98 0 0 1 1.336 0zM4.266 6.641a.34.34 0 0 1 0 .492l-.844.844a.313.313 0 0 1-.469 0l-.187-.188-.399.399c-.234.234-.234.585 0 .796l4.242 4.243c.211.21.563.21.797 0l2.11-2.11c.234-.234.234-.586 0-.797L5.273 6.078c-.21-.234-.562-.234-.796 0l-.399.399.188.187zm5.484-.797a4 4 0 0 0-.586-.492l-.187-.141a4.6 4.6 0 0 0-.774-.352l-.258-.093-.258-.07c-.164-.048-.351-.071-.515-.094l.96.984-.257.258L6.563 4.53l-.305-.328h.703c.281.024.539.07.797.117l.305.094.28.094c.282.094.563.234.821.398l.234.14c.211.165.422.329.61.54A4.67 4.67 0 0 1 11.39 8.89h-.375A4.3 4.3 0 0 0 9.75 5.844M2.133 13.46c.187.164.375.328.586.469l.21.14c.235.164.493.282.75.375l.259.094.28.07c.165.047.329.07.493.094l-.961-.984.258-.258 1.312 1.312.328.329H5.18l-.258-.024c-.258 0-.54-.047-.797-.117l-.305-.07-.28-.094c-.282-.117-.563-.235-.821-.399l-.211-.164a3.4 3.4 0 0 1-.633-.515 4.67 4.67 0 0 1-1.383-3.305h.375c0 1.102.422 2.203 1.266 3.047' />
    </g>
    <defs>
      <clipPath id='08c1a64a16c85275c05120ffe6ac30f6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceCaptionRegularIcon);
export default ForwardRef;
