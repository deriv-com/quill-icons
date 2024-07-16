import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m17.945 6.281 1.524 1.524a2.523 2.523 0 0 1 0 3.554l-1.875 1.875-5.078-5.078 1.875-1.875a2.523 2.523 0 0 1 3.554 0M2.515 18.156l9.102-9.101 5.078 5.078-9.101 9.101c-.39.391-.899.703-1.446.86L1.422 25.46a.8.8 0 0 1-.899-.234.8.8 0 0 1-.234-.899l1.367-4.726a3.4 3.4 0 0 1 .86-1.446m7.422 5.469h11.876a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H9.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' />
    </g>
    <defs>
      <clipPath id='1eebced9a329f94b34f18b20d44db277__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineLgFillIcon);
export default ForwardRef;
