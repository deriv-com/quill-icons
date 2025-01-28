import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.375 8.125a.9.9 0 0 0-.875-.875H8.273a2.65 2.65 0 0 1-1.859-.766l-.71-.71.6-.63-.6.63a.9.9 0 0 0-.63-.274H1.875A.88.88 0 0 0 1 6.375v7.848l1.395-3.5a1.3 1.3 0 0 1 1.23-.848h10.938c.41 0 .82.219 1.066.602.246.355.3.793.137 1.203l-1.75 4.375c-.192.52-.684.82-1.203.82H1.874c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h3.2c.464 0 .902.191 1.23.52l.738.738c.328.328.766.492 1.23.492H11.5c.957 0 1.75.793 1.75 1.75V9h-.875zM10.625 16h2.188c.164 0 .328-.11.382-.273l1.75-4.375a.44.44 0 0 0-.027-.41.47.47 0 0 0-.355-.192H3.624a.41.41 0 0 0-.41.3l-1.75 4.376a.39.39 0 0 0 .027.383c.082.136.219.191.383.191z' />
    </g>
    <defs>
      <clipPath id='69ff2268d2c8b507f5e8a3b87d91d3af__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenSmRegularIcon);
export default ForwardRef;
