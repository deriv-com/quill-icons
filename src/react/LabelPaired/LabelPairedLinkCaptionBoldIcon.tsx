import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.594 9.781-2.649 2.649c-1.336 1.312-3.468 1.312-4.78 0A3.393 3.393 0 0 1 6 7.836l.117-.14a.56.56 0 0 1 .797-.048.56.56 0 0 1 .047.797l-.094.117c-.797.891-.75 2.227.094 3.07.867.868 2.297.868 3.187 0l2.649-2.648a2.28 2.28 0 0 0 0-3.187 2.27 2.27 0 0 0-3.07-.094l-.141.117a.56.56 0 0 1-.797-.047.56.56 0 0 1 .047-.796l.14-.118A3.4 3.4 0 0 1 13.595 5c1.312 1.313 1.312 3.445 0 4.781M1.383 9.242l2.672-2.648a3.367 3.367 0 0 1 4.758 0 3.345 3.345 0 0 1 .164 4.594l-.141.14a.56.56 0 0 1-.797.07.56.56 0 0 1-.047-.796l.14-.141a2.25 2.25 0 0 0-.116-3.07 2.207 2.207 0 0 0-3.164 0L2.18 10.039c-.868.867-.868 2.297 0 3.188.843.82 2.18.867 3.07.093l.14-.117a.56.56 0 0 1 .798.047.56.56 0 0 1-.047.797L6 14.164a3.4 3.4 0 0 1-4.617-.14 3.395 3.395 0 0 1 0-4.782' />
    </g>
    <defs>
      <clipPath id='8338d8881ff8ab1bc647199696cb6711__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkCaptionBoldIcon);
export default ForwardRef;
