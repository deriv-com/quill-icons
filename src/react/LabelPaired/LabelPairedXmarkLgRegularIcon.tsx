import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.656 21.594 7.5 16.398l-5.195 5.196c-.235.234-.625.234-.899 0-.234-.274-.234-.664 0-.899L6.602 15.5l-5.196-5.156c-.234-.235-.234-.625 0-.899.274-.234.664-.234.899 0L7.5 14.641l5.156-5.196c.235-.234.625-.234.899 0 .234.274.234.664 0 .899L8.359 15.5l5.196 5.195c.234.235.234.625 0 .899-.274.234-.664.234-.899 0' />
    </g>
    <defs>
      <clipPath id='fa4bf3695e5cae9697fba0f456ab2771__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkLgRegularIcon);
export default ForwardRef;
