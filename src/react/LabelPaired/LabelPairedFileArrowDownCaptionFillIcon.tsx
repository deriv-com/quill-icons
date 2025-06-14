import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 3.5h3.75v3c0 .422.328.75.75.75h3V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m4.5 0 3 3H6zm-.937 5.438h-.024a.555.555 0 0 0-.562-.563.57.57 0 0 0-.563.563v2.414l-.727-.727a.513.513 0 0 0-.773 0 .513.513 0 0 0 0 .773l1.688 1.688c.21.234.562.234.773 0l1.688-1.688a.513.513 0 0 0 0-.773.513.513 0 0 0-.774 0l-.726.727z' />
    </g>
    <defs>
      <clipPath id='8cd07f7fb3147c7db802a09d7b3bf332__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownCaptionFillIcon);
export default ForwardRef;
