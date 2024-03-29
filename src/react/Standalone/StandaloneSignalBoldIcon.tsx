import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSignalBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M26 6.5a.95.95 0 0 1 .938.938v18.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V7.438c0-.508.39-.938.937-.938m-5 3.75a.95.95 0 0 1 .938.938v14.375c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V11.188c0-.508.39-.938.937-.938M16 14a.95.95 0 0 1 .938.938v10.625c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V14.938c0-.508.39-.938.937-.938m-5 3.75a.95.95 0 0 1 .938.938v6.875c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-6.875c0-.508.39-.938.937-.938M6 21.5a.95.95 0 0 1 .938.938v3.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.125c0-.508.39-.938.937-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSignalBoldIcon);
export default ForwardRef;
