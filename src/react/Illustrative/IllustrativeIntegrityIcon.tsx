import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeIntegrityIcon = (
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
      <path d='M30 19.333h-6.893a3.33 3.33 0 0 0-2.36.974l-2.274 2.273a2 2 0 0 0 0 2.827l.114.113c.166.167.353.293.553.393l-.16.16c-.38.38-.88.587-1.413.587H13.34c-1.1 0-2 .9-2 2s.9 2 2 2h7.56c.893 0 1.727-.347 2.36-.973l3.1-3.1c.38-.38.887-.594 1.433-.594h2.22c.367 0 .667-.3.667-.666v-5.334c0-.366-.3-.666-.667-.666l-.013.006Zm-4.593 6.314-3.1 3.1c-.38.38-.88.586-1.414.586h-7.56a.669.669 0 0 1-.666-.666c0-.367.3-.667.666-.667h4.227c.893 0 1.727-.347 2.36-.973l2.553-2.554a.655.655 0 0 0 .194-.473.664.664 0 0 0-1.133-.473l-1.06 1.06c-.26.26-.68.26-.94 0l-.114-.114a.664.664 0 0 1 0-.94l2.273-2.273c.38-.38.88-.587 1.414-.587h3.56v4.2c-.467.167-.9.42-1.26.78v-.006Zm3.926-.98H28v-4h1.333v4ZM11.253 13.693l2.28-2.273a2 2 0 0 0 0-2.827l-.113-.113a2.037 2.037 0 0 0-.553-.393l.16-.16a2.01 2.01 0 0 1 1.413-.587h4.227c1.1 0 2-.9 2-2s-.9-2-2-2h-7.56a3.34 3.34 0 0 0-2.36.973l-3.1 3.1c-.38.38-.887.594-1.427.594H2c-.367 0-.667.3-.667.666v5.334c0 .366.3.666.667.666h6.893c.887 0 1.727-.346 2.36-.973v-.007Zm-8.586-.36v-4H4v4H2.667Zm2.666-4.2c.467-.166.9-.42 1.26-.78l3.1-3.1a2.01 2.01 0 0 1 1.414-.586h7.56c.366 0 .666.3.666.666 0 .367-.3.667-.666.667H14.44a3.34 3.34 0 0 0-2.36.973l-1.48 1.48-.013.014-1.06 1.06a.664.664 0 1 0 .94.94L11.533 9.4a.681.681 0 0 1 .934.007l.113.113c.26.26.26.68 0 .94l-2.273 2.273a2.01 2.01 0 0 1-1.414.587h-3.56v-4.2.013ZM16.88 12.7a.647.647 0 0 0-.42 0c-.787.26-2.073.633-2.453.633a.66.66 0 0 0-.667.667v4c0 1.66 2.527 3.007 3.033 3.26a.665.665 0 0 0 .567.02c.033-.013 3.067-1.353 3.067-3.28v-4c0-.367-.3-.667-.667-.667-.367 0-1.667-.366-2.453-.633h-.007Zm1.787 5.3c0 .66-1.247 1.527-1.987 1.92-.92-.52-2.013-1.38-2.013-1.92v-3.42c.693-.14 1.566-.407 2-.547.433.14 1.306.414 2 .547V18Z' />
      <path d='M23.333 16.667c0 .366.3.666.667.666.367 0 .667-.3.667-.666 0-4.414-3.587-8-8-8-.367 0-.667.3-.667.666 0 .367.3.667.667.667 3.673 0 6.666 2.993 6.666 6.667ZM16 24.64c.34 0 .633-.26.667-.607a.671.671 0 0 0-.607-.726 6.632 6.632 0 0 1-6.06-6.64C10 16.3 9.7 16 9.333 16c-.366 0-.666.3-.666.667a7.956 7.956 0 0 0 7.273 7.966H16v.007ZM26.333 10a4.333 4.333 0 1 0 0-8.666 4.333 4.333 0 0 0 0 8.666Zm0-7.333c1.654 0 3 1.346 3 3 0 1.653-1.346 3-3 3-1.653 0-3-1.347-3-3 0-1.654 1.347-3 3-3Z' />
      <path d='M25.527 7.14c.133.133.3.193.473.193s.34-.066.473-.193l1.334-1.333a.664.664 0 1 0-.94-.94l-.86.86-.194-.194a.664.664 0 1 0-.94.94l.667.667h-.013Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeIntegrityIcon);
export default ForwardRef;
