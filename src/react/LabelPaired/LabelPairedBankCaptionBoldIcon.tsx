import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankCaptionBoldIcon = (
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
      <path d='m6.258 3.57 5.32 2.953c.258.141.422.399.422.68a.81.81 0 0 1-.82.797H.797A.79.79 0 0 1 0 7.203c0-.281.14-.539.398-.68l5.32-2.953a.55.55 0 0 1 .54 0m-.914 3.305c-.07-.094-.094-.234-.094-.375 0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .14-.047.281-.117.375h3.281L6 4.719 2.063 6.875zM1.5 8.75h1.125v3.75h1.5V8.75H5.25v3.75h1.5V8.75h1.125v3.75h1.5V8.75H10.5v3.75h.188a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H1.5a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563zm-.75 5.625h10.688a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.75a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563' />
    </g>
    <defs>
      <clipPath id='03dd69dc0bcb7315dea0569e71a20cb5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankCaptionBoldIcon);
export default ForwardRef;
