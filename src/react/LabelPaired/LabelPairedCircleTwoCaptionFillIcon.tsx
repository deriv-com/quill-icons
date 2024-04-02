import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoCaptionFillIcon = (
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
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-.797-7.664a1.1 1.1 0 0 1 .61-.188h.07a.88.88 0 0 1 .867.868.93.93 0 0 1-.281.632L3.914 11.54a.59.59 0 0 0-.14.61.59.59 0 0 0 .539.351h3.375a.555.555 0 0 0 .562-.562.57.57 0 0 0-.562-.563h-1.97l1.524-1.406c.399-.375.61-.89.61-1.453a1.996 1.996 0 0 0-1.946-1.993h-.093c-.47 0-.915.141-1.29.422l-.562.422a.567.567 0 0 0-.117.797.567.567 0 0 0 .797.117z' />
    </g>
    <defs>
      <clipPath id='ec00c73282ca0de945309492113ef48e__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoCaptionFillIcon);
export default ForwardRef;
