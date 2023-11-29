import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativePartnershipShieldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g fillOpacity={0.72}>
      <path d='M29.333 13.815h-2.086a2.666 2.666 0 1 0-5.16 0H20c-.733 0-1.333.6-1.333 1.333v2.087a2.666 2.666 0 1 0 0 5.16v2.087c0 .733.6 1.333 1.333 1.333h7.333a3.335 3.335 0 0 0 3.334-3.333v-7.334c0-.733-.6-1.333-1.334-1.333Zm0 8.667c0 1.1-.9 2-2 2H20v-3.187c0-.267-.153-.5-.393-.607a.652.652 0 0 0-.274-.06c-.16 0-.32.06-.446.174-.247.226-.56.346-.887.346-.733 0-1.333-.6-1.333-1.333s.6-1.333 1.333-1.333c.327 0 .64.126.887.346A.665.665 0 0 0 20 18.335v-3.187h3.187a.665.665 0 0 0 .493-1.113 1.302 1.302 0 0 1-.347-.887c0-.733.6-1.333 1.334-1.333.733 0 1.333.6 1.333 1.333 0 .414-.187.714-.347.887a.665.665 0 0 0 .493 1.113h3.187v7.334ZM12 13.815H4.667a3.335 3.335 0 0 0-3.334 3.333v7.334c0 .733.6 1.333 1.334 1.333h2.086a2.666 2.666 0 1 0 5.16 0H12c.733 0 1.333-.6 1.333-1.333v-3.187c0-.267-.153-.5-.393-.607a.68.68 0 0 0-.72.114c-.247.226-.56.346-.887.346-.733 0-1.333-.6-1.333-1.333s.6-1.333 1.333-1.333c.327 0 .64.126.887.346a.665.665 0 0 0 1.113-.493v-3.187c0-.733-.6-1.333-1.333-1.333Zm0 3.42a2.666 2.666 0 1 0 0 5.16v2.087H8.813a.665.665 0 0 0-.493 1.113c.16.173.347.473.347.887 0 .733-.6 1.333-1.334 1.333-.733 0-1.333-.6-1.333-1.333 0-.414.187-.714.347-.887a.665.665 0 0 0-.493-1.113H2.666v-7.334c0-1.1.9-2 2-2H12v2.087ZM16.74 13.522c.133.133.3.193.473.193.174 0 .34-.067.474-.193l.366-.367a.664.664 0 1 0-.94-.94l-.366.367c-.26.26-.26.68 0 .94h-.007ZM14.72 12.195a.664.664 0 1 0-.94.94l.367.367c.133.133.3.193.473.193s.34-.067.473-.193c.26-.26.26-.68 0-.94l-.366-.367h-.007ZM16.08 11.335c.367 0 .667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667ZM17.687 25.815a.664.664 0 1 0-.94.94l.366.367c.134.133.3.193.474.193a.664.664 0 0 0 .473-1.133l-.367-.367h-.006ZM14.147 25.828l-.367.367a.664.664 0 0 0 .473 1.133c.174 0 .34-.066.474-.193l.366-.367a.664.664 0 1 0-.94-.94h-.006ZM16.08 28.002c-.367 0-.667.3-.667.666v.667c0 .367.3.667.667.667.367 0 .667-.3.667-.667v-.667c0-.366-.3-.666-.667-.666ZM30 2.002c-.387 0-1.667-.367-2.453-.634a.648.648 0 0 0-.42 0c-.787.26-2.074.634-2.454.634a.66.66 0 0 0-.666.666v4c0 1.66 2.526 3.007 3.033 3.26a.665.665 0 0 0 .567.02c.033-.013 3.066-1.353 3.066-3.28v-4c0-.366-.3-.666-.666-.666H30Zm-.667 4.666c0 .66-1.246 1.527-1.986 1.92-.92-.52-2.014-1.38-2.014-1.92v-3.42c.694-.14 1.567-.406 2-.546.434.14 1.307.413 2 .546v3.42Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativePartnershipShieldIcon);
export default ForwardRef;