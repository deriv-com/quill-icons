import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardLgBoldIcon = (
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
      <path d='M8.75 9.172q0-.508.352-.82Q9.414 8 9.922 8q.39 0 .703.234l8.984 6.524q.39.274.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.14 1.14 0 0 1-.703.234q-.508 0-.82-.352-.352-.312-.352-.82v-3.867l-6.914 4.844Q1.524 23 1.172 23q-.508 0-.82-.352Q0 22.336 0 21.828V9.172q0-.508.352-.82Q.664 8 1.172 8q.39 0 .664.195L8.75 13.04zm0 6.172-6.875-4.805V20.5l6.875-4.844zm8.71.156-6.835-4.96v9.92z' />
    </g>
    <defs>
      <clipPath id='6624dc92ae4f18fa38cb1987df3e716f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgBoldIcon);
export default ForwardRef;
