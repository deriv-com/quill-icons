import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.203 11.203a1.103 1.103 0 0 1 1.547 0l9.047 9c.422.469.422 1.172 0 1.594-.469.469-1.172.469-1.594 0L12 13.594l-8.203 8.203c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547z' />
    </g>
    <defs>
      <clipPath id='de55bfd95da5ceae0680d9b45907a6fd__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpXlBoldIcon);
export default ForwardRef;
