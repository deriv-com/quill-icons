import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenCaptionBoldIcon = (
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
      <path d='M9.25 14.75h-7.5a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h2.742c.399 0 .774.164 1.055.445l.633.633c.28.281.656.422 1.054.422H10c.82 0 1.5.68 1.5 1.5V8h-1.125v-.75A.4.4 0 0 0 10 6.875H7.234c-.703 0-1.359-.258-1.851-.75l-.633-.633a.38.38 0 0 0-.258-.117H1.75a.385.385 0 0 0-.375.375v6.14l1.594-2.765a.75.75 0 0 1 .656-.375H13c.258 0 .516.14.633.375.14.234.14.54 0 .773l-2.625 4.5a.77.77 0 0 1-.633.352z' />
    </g>
    <defs>
      <clipPath id='8872f5a646004f37eb167339a09dae59__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenCaptionBoldIcon);
export default ForwardRef;
