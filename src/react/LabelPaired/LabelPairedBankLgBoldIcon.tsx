import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankLgBoldIcon = (
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
      <path d='m10.43 5.617 8.867 4.922c.43.234.703.664.703 1.133 0 .742-.625 1.328-1.367 1.328H1.328A1.317 1.317 0 0 1 0 11.672c0-.469.234-.899.664-1.133l8.867-4.922a.92.92 0 0 1 .899 0m-1.524 5.508c-.117-.156-.156-.39-.156-.625 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .234-.078.469-.195.625h5.468L10 7.531l-6.562 3.594zM2.5 14.25h1.875v6.25h2.5v-6.25H8.75v6.25h2.5v-6.25h1.875v6.25h2.5v-6.25H17.5v6.25h.313a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.5c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938zm-1.25 9.375h17.813a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.25c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938' />
    </g>
    <defs>
      <clipPath id='94846707ad91feb295364f38e72e6a33__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankLgBoldIcon);
export default ForwardRef;
