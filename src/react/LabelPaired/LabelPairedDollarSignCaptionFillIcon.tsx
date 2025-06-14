import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 3.5c.398 0 .75.352.75.75v.844c.023 0 .07.023.094.023h.023l1.125.211c.422.07.68.469.61.867a.76.76 0 0 1-.868.61L4.61 6.594c-.726-.117-1.382-.024-1.828.14-.445.188-.633.446-.68.657-.046.257 0 .398.024.492.047.094.14.187.305.305.375.257.96.421 1.734.609l.07.023c.657.188 1.477.399 2.086.797.328.211.657.516.844.914.211.422.234.89.164 1.406-.164.891-.797 1.477-1.547 1.782-.328.14-.68.21-1.031.258v.773c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-.797c-.023-.023-.023-.023-.047-.023-.562-.07-1.5-.328-2.133-.61a.74.74 0 0 1-.398-.984c.187-.375.61-.563 1.008-.375.468.21 1.289.422 1.758.492.75.117 1.359.047 1.78-.117.4-.164.563-.399.634-.68.023-.258 0-.398-.047-.469a.76.76 0 0 0-.305-.328c-.375-.234-.96-.398-1.734-.609l-.07-.023c-.657-.165-1.477-.399-2.087-.797-.328-.211-.656-.516-.843-.914a2.3 2.3 0 0 1-.141-1.383c.164-.914.844-1.477 1.594-1.781a3.7 3.7 0 0 1 1.031-.258V4.25c0-.398.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='6ac08bbfde422ec9e336c6ba5e48703c__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignCaptionFillIcon);
export default ForwardRef;
