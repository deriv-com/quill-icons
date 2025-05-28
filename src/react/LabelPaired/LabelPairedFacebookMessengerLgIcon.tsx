import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookMessengerLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 5.813c5.469 0 9.688 4.023 9.688 9.414 0 6.836-6.524 10.664-12.5 9.023-.352-.078-.391 0-2.422.898-.274.079-.547.079-.743-.078-.234-.117-.351-.351-.351-.625-.078-1.797 0-1.953-.313-2.265C1.445 20.5.313 18.04.313 15.227.313 9.836 4.53 5.813 10 5.813m5.82 7.265c.274-.43-.234-.937-.664-.625l-3.047 2.305c-.234.156-.507.156-.703 0l-2.265-1.68c-.352-.234-.743-.351-1.133-.273-.43.078-.781.312-.977.664L4.18 17.96c-.274.43.234.937.664.625L7.89 16.28c.234-.156.507-.156.703 0l2.265 1.68c.352.234.743.352 1.172.273.39-.078.742-.312.938-.664z' />
    </g>
    <defs>
      <clipPath id='315fe803624860306f9f88f61c1e8caa__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookMessengerLgIcon);
export default ForwardRef;
