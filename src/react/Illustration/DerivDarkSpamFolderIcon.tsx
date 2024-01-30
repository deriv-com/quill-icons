import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkSpamFolderIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#242828'
      d='M23 18V7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2'
    />
    <path
      fill='#6E6E6E'
      d='M22 18V7a1 1 0 0 0-1-1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2'
    />
    <path
      fill='#323738'
      d='M23 18v-8a2 2 0 0 0-2-2h-8L9.586 4.586A2 2 0 0 0 8.172 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2'
    />
    <path fill='#FF444F' d='M22 15.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m19.383 13.597 1.023 1.024a.2.2 0 0 1 .062.153v1.452q0 .092-.064.156l-1.024 1.023a.23.23 0 0 1-.155.064h-1.45a.22.22 0 0 1-.156-.066l-1.023-1.024a.23.23 0 0 1-.064-.155v-1.45a.22.22 0 0 1 .064-.153l1.026-1.026a.22.22 0 0 1 .153-.064h1.452c.057 0 .114.024.155.066m-.248 3.434.897-.897v-1.268l-.897-.897h-1.269l-.896.897v1.268l.896.897zm-.634-.875a.219.219 0 1 0 0 .438.219.219 0 0 0 0-.438m-.219-1.531a.22.22 0 0 1 .219-.219.22.22 0 0 1 .219.219v1.094a.22.22 0 0 1-.22.219.22.22 0 0 1-.218-.22z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkSpamFolderIcon);
export default ForwardRef;
