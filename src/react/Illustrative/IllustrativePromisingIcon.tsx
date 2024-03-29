import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativePromisingIcon = (
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
    <g>
      <path d='M20.667 13.333c-.367 0-.667.3-.667.667v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V13.333c0-1.1.9-2 2-2 .367 0 .667-.3.667-.666S14.367 10 14 10a3.335 3.335 0 0 0-3.333 3.333V24A3.334 3.334 0 0 0 14 27.333h4A3.334 3.334 0 0 0 21.333 24V14c0-.367-.3-.667-.666-.667' />
      <path d='M13.333 24c0 .367.3.667.667.667h4c.367 0 .667-.3.667-.667s-.3-.667-.667-.667h-4c-.367 0-.667.3-.667.667M21.253 9.947l-1.186-.714-.714-1.186c-.24-.4-.9-.4-1.14 0L17.5 9.233l-1.187.714c-.2.12-.326.34-.326.573s.12.453.326.573l1.187.714.713 1.186c.12.2.34.327.574.327a.66.66 0 0 0 .573-.327l.713-1.186 1.187-.714c.2-.12.327-.34.327-.573a.66.66 0 0 0-.327-.573zm-2.02.8a.6.6 0 0 0-.226.226l-.227.38-.227-.38a.6.6 0 0 0-.226-.226l-.38-.227.38-.227a.6.6 0 0 0 .226-.226l.227-.38.227.38a.6.6 0 0 0 .226.226l.38.227zM15.807 8.487c.133.133.3.193.473.193s.34-.067.473-.193c.26-.26.26-.68 0-.94l-.94-.94a.664.664 0 1 0-.94.94l.94.94zM24.433 4.86a.664.664 0 0 0-.94 0l-2.5 2.5a.664.664 0 0 0 .474 1.133c.173 0 .34-.066.473-.193l2.5-2.5c.26-.26.26-.68 0-.94zM24.813 18.34c.134.133.3.193.474.193.173 0 .34-.066.473-.193l.367-.367a.664.664 0 1 0-.94-.94l-.367.367c-.26.26-.26.68 0 .94zM25.767 19.993a.664.664 0 1 0-.94.94l.366.367c.134.133.3.193.474.193a.664.664 0 0 0 .473-1.133l-.367-.367zM24 14c-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667s.667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667M24 22c-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667s.667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667M28.333 18.333h-.666c-.367 0-.667.3-.667.667s.3.667.667.667h.666c.367 0 .667-.3.667-.667s-.3-.667-.667-.667M6.247 18.34c.133.133.3.193.473.193s.34-.066.473-.193c.26-.26.26-.68 0-.94l-.366-.367a.664.664 0 1 0-.94.94l.366.367zM7.173 19.993a.664.664 0 0 0-.94 0l-.366.367a.664.664 0 0 0 .473 1.133c.173 0 .34-.066.473-.193l.367-.367c.26-.26.26-.68 0-.94zM8 14c-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667s.667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667M8 22c-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667s.667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667M4.333 18.333h-.666c-.367 0-.667.3-.667.667s.3.667.667.667h.666c.367 0 .667-.3.667-.667s-.3-.667-.667-.667' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativePromisingIcon);
export default ForwardRef;
