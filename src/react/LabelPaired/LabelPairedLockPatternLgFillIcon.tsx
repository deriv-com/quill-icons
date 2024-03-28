import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 8c0-1.367 1.094-2.5 2.5-2.5.898 0 1.719.508 2.148 1.25h3.165A2.53 2.53 0 0 1 12.5 5.5c.898 0 1.719.508 2.148 1.25h3.165A2.53 2.53 0 0 1 20 5.5c1.367 0 2.5 1.133 2.5 2.5 0 1.406-1.133 2.5-2.5 2.5-.234 0-.469 0-.664-.078l-4.453 4.453c.078.195.117.43.117.625 0 1.406-1.133 2.5-2.5 2.5-.234 0-.469 0-.664-.078L8.008 21.75h2.305A2.53 2.53 0 0 1 12.5 20.5c.898 0 1.719.508 2.148 1.25h3.165a2.51 2.51 0 0 1 2.148-1.25c1.406 0 2.5 1.133 2.5 2.5 0 1.406-1.094 2.5-2.5 2.5a2.43 2.43 0 0 1-2.148-1.25h-3.165c-.43.781-1.25 1.25-2.187 1.25a2.43 2.43 0 0 1-2.149-1.25H7.149A2.43 2.43 0 0 1 5 25.5 2.47 2.47 0 0 1 2.5 23c0-1.367 1.094-2.5 2.5-2.5.195 0 .43.04.625.117l4.453-4.453a1.8 1.8 0 0 1-.117-.664c0-1.367 1.133-2.5 2.5-2.5.234 0 .469.04.664.117l3.828-3.867h-2.305c-.43.781-1.25 1.25-2.187 1.25a2.43 2.43 0 0 1-2.149-1.25H7.149A2.43 2.43 0 0 1 5 10.5 2.47 2.47 0 0 1 2.5 8m0 7.5a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188 0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148m15 0a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188 0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148' />
    </g>
    <defs>
      <clipPath id='8d50b4aa6d1eedd8711fbbc42acbef6f__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternLgFillIcon);
export default ForwardRef;
